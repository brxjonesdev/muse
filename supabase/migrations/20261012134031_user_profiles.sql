--- Creating the profiles table in schema
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY references auth.users(id) on delete cascade,
    username TEXT NOT NULL unique,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    constraint formatted_username check (
        username = lower(username)
        and username ~ '^[a-z0-9_]{3,24}$'
    )
);

-- rls
ALTER TABLE public.profiles enable row level security;

CREATE policy "Anyone can read profiles"
  on public.profiles
  for select
  to anon, authenticated
  using (true);

CREATE policy "Users can update their own profile"
    on public.profiles
    for update
    to authenticated
    using ((select auth.uid()) = id)
    with check ((select auth.uid()) = id);

-- trigger function for adding a new user on sign up
CREATE function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare requested_username TEXT;
begin
requested_username := -- := is like = in js
  lower(new.raw_user_meta_data ->> 'username');
if requested_username is null or requested_username !~ '^[a-z0-9_]{3,24}$' then
  raise exception 'username is invalid';
  end if;

insert into public.profiles(id, username)
values (new.id, requested_username);
return new;
end;
$$;

-- trigger
CREATE trigger on_user_create
    after insert on auth.users
    for each row
    execute function public.handle_new_user();

REVOKE INSERT, UPDATE, DELETE
    ON public.profiles FROM anon, authenticated;
    
GRANT SELECT
    ON public.profiles TO anon, authenticated;
    
GRANT UPDATE
    ON public.profiles TO authenticated;
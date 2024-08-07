import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function FeedHeader() {
  return (
    <section className="">
      <div className="flex items-start gap-3">
        <Avatar className="h-10 w-10 shrink-0">
          <AvatarImage
            src="https://64.media.tumblr.com/9fd769413a24e007d81ede3a886bfc92/8294417e3352c36f-13/s1280x1920/bf1b923fea50b111a4800c88bbf1b43ff1baef34.jpg"
            alt="user-image"
          />
          <AvatarFallback>IRE</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="What's on your mind?"
            className="resize-none h-[80px] p-2 bg-muted rounded-md"
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Button variant="default" size="icon" className="bg-app-accent">
                <ImageIcon className="w-5 h-5" />
                <span className="sr-only">Add image</span>
              </Button>
              <Button variant="default" size="icon" className="bg-app-accent">
                <EmojiIcon className="w-5 h-5" />
                <span className="sr-only">Tag people</span>
              </Button>
            </div>
            <Button className="bg-app-accent">Post</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function EmojiIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

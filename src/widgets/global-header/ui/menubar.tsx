"use client"
import {
Menubar,
MenubarContent,
MenubarGroup,
MenubarItem,
MenubarMenu,
MenubarSeparator,
MenubarShortcut,
MenubarTrigger,
} from "@/shared/ui/shadcn/menubar";

export default function HeaderMenuBar() {
  return (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>Popular</MenubarTrigger>
        <MenubarContent>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Discover</MenubarTrigger>
        <MenubarContent>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Crates</MenubarTrigger>
        <MenubarContent>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>@you</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}









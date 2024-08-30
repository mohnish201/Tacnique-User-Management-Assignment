import { AlignJustify, LogOut, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "../ui/menubar"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Sidebar } from "./Sidebar"

const Navbar = () => {
    return <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-6 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center justify-start rtl:justify-end">
                    <Sheet>
                        <SheetTrigger className="md:hidden">
                            <AlignJustify />
                        </SheetTrigger>
                        <SheetContent className="w-[250px]" side="left">
                            <Sidebar />
                        </SheetContent>
                    </Sheet>
                    <Link href={'/'}>
                        <img src="https://tacnique.com/logos/tacnique-logo.svg" alt='logo' width={100} />
                    </Link>
                </div>



                <div className="flex items-center gap-2">

                    <Menubar className="border-0 p-0">
                        <MenubarMenu >
                            <MenubarTrigger className="cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} />
                                    <AvatarFallback>
                                        <User />
                                    </AvatarFallback>
                                </Avatar>

                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <div className="flex items-center gap-1">
                                        <Avatar>
                                            <AvatarImage src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} />
                                            <AvatarFallback>
                                                <User />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-xs font-[500]">Admin</p>
                                            <p className="text-xs text-gray-500">{'admin@gmail.com'}</p>
                                        </div>
                                    </div>

                                </MenubarItem>

                                <MenubarItem className="gap-2">
                                    <LogOut size="20px" strokeWidth={1.5} />
                                    Logout
                                </MenubarItem>

                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>

                    <div>
                        <p className="text-md cursor-pointer font-[500] capitalize">John</p>
                        <p className="text-xs text-gray-400">Admin</p>
                    </div>
                </div>


            </div>
        </div>
    </nav>
}

export { Navbar }
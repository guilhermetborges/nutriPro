"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Banknote, CalendarCheck2, Contact, Folder, List, ChevronLeft, ChevronRight } from "lucide-react"

import Link from "next/link";

export function Sidebar({children}: {children: React.ReactNode}) {

    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <div className="flex min-h-screen w-full">

            <aside
            className={clsx("flex flex-col border-r bg-background transition-all duration-300 p-4 h-full" , {
                "w-20": isCollapsed,
                "w-64": !isCollapsed,
                "hidden md:flex md:fixed": true,
                
            })}>
                <div className="mb-6 mt-4 ml-2 flex items-center justify-between">
                    {!isCollapsed && (
                        <h1 className="text-2xl font-bold w-auto h-auto">Nutri <span className="text-blue-500">Pro</span></h1>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hidden md:inline-flex"
                        onClick={() => setIsCollapsed((v) => !v)}
                        aria-label={isCollapsed ? "Expandir sidebar" : "Colapsar sidebar"}
                    >
                        {isCollapsed ? (
                            <ChevronRight className="w-5 h-5" />
                        ) : (
                            <ChevronLeft className="w-5 h-5" />
                        )}
                    </Button>
                </div>
                {/* Desktop navigation mirroring the mobile sheet */}
                <nav className="grid gap-2 text-base pt-2 bg-black-500 mt-2">
                    <Sidebarlink
                        
                        href="/dashboard/profile"
                        label="Meu Perfil"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Contact className="w-6 h-3" />} />

                    <Sidebarlink
                        href="/dashboard"
                        label="agendamentos"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<CalendarCheck2 className="w-6 h-6" />} />

                    <Sidebarlink
                        href="/dashboard/services"
                        label="Serviços"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Folder className="w-6 h-6" />} />

                    <Sidebarlink
                        href="/dashboard/plans"
                        label="Planos"
                        pathname={pathname}
                        isCollapsed={isCollapsed}
                        icon={<Banknote className="w-6 h-6" />} />
                </nav>
            </aside>

            <div className={clsx("flex flex-1 flex-col transition-all duration-300 ",{
                "md:ml-20": isCollapsed,
                "md:ml-64": !isCollapsed
            })}>

                <header className="md:hidden flex items-center border-b justify-between px-4 md:px-6 h-14 z-10 sticky top-0 bg-white">
                    <Sheet>
                        <div className="flex items-center gap-4 ">
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <List className="w-5 h-5" />
                                </Button>
                            </SheetTrigger>

                            <h1 className="text-base md:text-lg font-semibold">
                                Menu NutriPro
                            </h1>

                        </div>

                        <SheetContent side="right" className="sm:max-w-xs text-black">
                            <SheetTitle>NutriPro</SheetTitle>
                            <SheetDescription> 
                                Menu Administrativo
                            </SheetDescription>

                            <nav className="grid gap-2 text-base pt-5">
                                <Sidebarlink
                                 href="/dashboard/profile"
                                 label="Meu Perfil"
                                 pathname={pathname} 
                                 isCollapsed={isCollapsed}
                                 icon={<Contact  className="w-6 h-6"/>} />

                                <Sidebarlink
                                 href="/dashboard"
                                 label="agendamentos"
                                 pathname={pathname} 
                                 isCollapsed={isCollapsed}
                                 icon={<CalendarCheck2  className="w-6 h-6"/>} />
                                
                                <Sidebarlink
                                 href="/dashboard/services"
                                 label="Serviços"
                                 pathname={pathname} 
                                 isCollapsed={isCollapsed}
                                 icon={<Folder  className="w-6 h-6"/>} />

                                <Sidebarlink
                                 href="/dashboard/plans"
                                 label="Planos"
                                 pathname={pathname} 
                                 isCollapsed={isCollapsed}
                                 icon={<Banknote  className="w-6 h-6"/>} />

                            </nav>
                        </SheetContent>
                    </Sheet>

                </header>

                <main className="flex-1 py-4 px-2 md:p-6">
                    {children}
                </main>

            </div>
        </div>
    )
}

interface SidebarlinkProps{
    href: string;
    icon: React.ReactNode;
    label: string;
    pathname: string;
    isCollapsed: boolean
}
function Sidebarlink({href, icon, label, pathname, isCollapsed}: SidebarlinkProps){
    return(
        <Link
        href={href}>
            
            <div className={clsx("flex items-center gap-2  px-3 py-2 rounded-md  transition-colors", {
                "text-white bg-blue-500": pathname === href,
                "text-gray-700 hover:bg-green-200": pathname !== href
            })}>
                <span className="w-6 h-6">{icon}</span>
                {!isCollapsed && <span>{label}</span>}
            </div>
        </Link>
    )
}
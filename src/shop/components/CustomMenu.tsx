import { type FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LogOutIcon,
  MailCheckIcon,
  ShieldUser,
} from "lucide-react"
import { useAuthStore } from '@/auth/stores/auth.store'

export const CustomMenu: FC = () => {
    const { user, logout, initialsName } = useAuthStore();
    const handleLogout = () => {
      logout();
    };
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>{initialsName()}</AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align="end" className='gap-4'>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <ShieldUser color="#16a0bb" strokeWidth={2.5} />
          <h1 className="font-montserrat text-xs tracking-tight">
            {user?.fullName}
          </h1>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MailCheckIcon color='#e49e07' strokeWidth={2.5} />
          <h1 className="font-montserrat text-xs tracking-tight">
            {user?.email}
          </h1>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator />

      <DropdownMenuItem onClick={handleLogout} className=' cursor-pointer'>
        <LogOutIcon color='#cb1a1a' strokeWidth={2.5}/>
        <h1 className="font-montserrat text-xs tracking-tight font-semibold">
          Cerrar Sesión
        </h1>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

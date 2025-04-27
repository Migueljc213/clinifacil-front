"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Users } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const BotaoLogin = () => {
  const { data: session } = useSession();
  return session ? (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        className="bg-white text-black hover:bg-gray-200"
      >
        {session.user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session.user.image} />
                  <AvatarFallback>
                    {session.user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <p>{session.user?.name}</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-100">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Button
                    variant="outline"
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => signOut()}
                  >
                    <span className="flex items-center gap-2">
                      {" "}
                      <LogOut />
                      Log out
                    </span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </Button>
    </div>
  ) : (
    <Button
      variant="outline"
      className="bg-white text-black hover:bg-gray-200"
      onClick={() => signIn("google")}
    >
      Login
    </Button>
  );
};

export default BotaoLogin;

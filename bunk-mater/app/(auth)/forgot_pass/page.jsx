import Link from "next/link"

export default function ForgotPass(){
    return(
        <div className="h-screen">
            <p className="p-4 text-xl"><Link href="/login"><u>Go back to login</u></Link></p>
            <div className="p-4 h-full w-full">
                <p className="text-xl">Forgotten your password huh..</p>
                <p>Either do drugs and lock in to remember that password or you can create a new account and start over.</p>
            </div>
        </div>
    )
}
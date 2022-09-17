import Image from 'next/image'
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="ninja" width={128} height={70} />
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/ninja">
                <a>Ninja List</a>
            </Link>
        </nav>
    )
}
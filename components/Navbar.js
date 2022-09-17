import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1> Ninja List</h1>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/ninja">
                <a>Ninja</a>
            </Link>
        </nav>
    )
}
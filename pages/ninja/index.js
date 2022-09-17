import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

// getStaticProps is a function that return an object of the `props` that passed to the component
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninja = ({ ninjas }) => {
    return (
        <>
            <Head>
                <title>Ninja | List</title>
            </Head>
            <div>
                <h1>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={`/ninja/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Ninja
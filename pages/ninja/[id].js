// getStaticPaths is a function that return an object with `paths:[{params:{id}}]` to know how many routes and static html pages should be build in build time with another other properties like fallback which is using with value false to redirect to 404 if the paths not exist in the potential paths

// the usage of this function is to tell next how many pages need to build depend on our data (ids)
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            // should return params object
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
// getStaticProps accept a context object automatically
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Detail = ({ ninja }) => {
    return (
        <div>
            <h1>Details Page</h1>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>

        </div>
    )
}

export default Detail
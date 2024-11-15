import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="blog-details">
            { blog && <article>
                <h2>{ blog.title }</h2>
                <div>{ blog.body }</div>
                <p>Written by { blog.author }</p>
                <button onClick={handleClick}>delete</button>
            </article> }
        </div>
     );
}
 
export default BlogDetails;
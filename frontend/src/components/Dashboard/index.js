import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import './Dashboard.css';
import displayPost from "./displayPost.js";
import { displayAllPosts } from '../../store/dashboard'

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(displayAllPosts(sessionUser.id));
    }, 500)
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;


  return (
  <>
    {/* { isLoaded && ( */}
      <div>
        <div className="spacer"></div>
        { posts.map((post, idx) => {
          return displayPost(post, idx)
        })}
      </div>
    {/* )} */}
</>
)
}

export default Dashboard;

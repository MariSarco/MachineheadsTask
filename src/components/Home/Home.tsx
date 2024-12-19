import { useEffect, useState } from "react";
import { postsActions } from "../../redux/slices/posts/posts.slice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import styles from "./Home.module.scss";
import { postsSelector } from "../../redux/slices/posts/posts.selector";
import { Button, Popconfirm } from "antd";
import PageName from "../../shared/PageName/PageName";

const Home = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(postsSelector.currentPage);
  const pageCount = useAppSelector(postsSelector.pageCount);
  const posts = useAppSelector(postsSelector.postResponse);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(postsActions.posts(page));
  }, [dispatch, page]);

  const nextPageHandler = () => {
    if (page + 1 <= pageCount) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPageHandler = () => {
    if (page - 1 >= 1) {
      setPage((prev) => prev - 1);
    }
  };

  // const addPostHandler = () => {

  // }

  const deletePostHandler = (postId: number) => {
    console.log(postId);
    // dispatch(postsActions.deletePost(postId));
  };

  return (
    <>
      <PageName pageName="Posts" />
      <div className={styles.container}>
        {/* <Button color="primary" variant="solid" onClick={addPostHandler}>Add post</Button> */}
        {posts &&
          posts.map((post) => (
            <div key={post.id} className={styles.post_container}>
              <div className={styles.post_header}>
                <h2>
                  {post.title}({post.code})
                </h2>
                <Popconfirm
                  title="Delete the post"
                  description="Are you sure to delete this post?"
                  onConfirm={() => deletePostHandler(post.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button color="default" variant="solid">
                    Delete
                  </Button>
                </Popconfirm>
              </div>
              <div className={styles.post_body}>
                <img
                  src={post.previewPicture.url}
                  alt={post.previewPicture.name}
                />
              </div>
              <div className={styles.post_footer}>
              <h4>Author: {post.authorName}</h4>
                {!!post.tagNames.length && (
                  <div className={styles.tags}>
                    <h4>Tags:</h4>
                    {post.tagNames.map((tag) => (
                      <div key={tag} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
            </div>
          ))}
        <div className={styles.buttons}>
          <button onClick={prevPageHandler} disabled={page === 1}>
            Prev
          </button>
          <button onClick={nextPageHandler} disabled={page === pageCount}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

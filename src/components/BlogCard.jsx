import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyModal from "./MyModal";
import { useState } from "react";
import data from "../data";
import MyNavbar from "./MyNavbar";

function BlogCard({setPostCount}) {
  console.log(data);

  const [show, setShow] = useState(false);
  const [blog, setBlog] = useState(null);
  const [page, setPage] = useState(1);
  //const [dataInfo, setDataInfo] = useState(data);

  setPostCount(dataInfo.length)

  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleShow = (blog) => {
    setBlog(blog);
    setShow(true);
  };

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
  };



  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = dataInfo.slice(firstIndex, lastIndex);

  const handleDelete = (id) => {
    const newData = dataInfo.filter((blog) => blog.id !== id);
    setDataInfo(newData);
  };

  return (
    <>
      <MyNavbar postCount={dataInfo.length}/>
      <div className="row justify-content-center align-items-center">
        {currentItems.map((blog) => {
          const { id, title, body } = blog;
          return (
            <div className="col d-flex justify-content-center" key={id}>
              <div
                className="modal show"
                style={{
                  display: "block",
                  position: "initial",
                  width: "12rem",
                }}
              >
                <Modal.Dialog>
                  <Modal.Header closeButton className="close" onClick={()=>handleDelete(id)}>
                    <Modal.Title className="title">{title}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <p className="body">{body}</p>
                  </Modal.Body>

                  <Modal.Footer className="mx-auto">
                    <Button className="btn-details" variant="primary" onClick={() => handleShow(blog)}>
                      See Details
                    </Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </div>
            </div>
          );
        })}
      </div>

      {blog && <MyModal show={show} setShow={setShow} blog={blog} />}

      <nav aria-label="Page navigation">
        <ul className="pagination d-flex justify-content-center">
          {[...Array(totalPages).keys()].map((number) => (
            <li key={number + 1} className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePage(number + 1)
                }}
              >
                {number + 1}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default BlogCard;

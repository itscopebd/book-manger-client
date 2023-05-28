import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({book}) => {
  const {_id,author_name,book_name,book_pdf_url,category_name,image_url,metadata_description}=book;
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src={image_url}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{category_name}</h5>
          <p class="card-text">
            {metadata_description}
          </p>
        </div>
        <div class="card-footer">
          <Link to={`details/${_id}`} className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

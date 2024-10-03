import React from "react";
import FilteredPost from "./FilteredPost";
import SetPost from "./SetPost";

const PostReuse = ({
  setPost,
  filteredCategory,
  slicingFilterCategory,
}) => {

  // console.log(filteredCategory);
  

  return (
    <>
      {filteredCategory.length > 0 ? (
        <FilteredPost
          filteredCategory={filteredCategory}
          slicingFilterCategory={slicingFilterCategory}
        />
      ) : (
        <SetPost setPost={setPost} />
      )}
    </>
  );
};

export default PostReuse;

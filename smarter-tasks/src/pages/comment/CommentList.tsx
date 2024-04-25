import commenticon from "../../assets/images/comment.png";
import { useCommentState } from "../../context/comment/context";

export default function CommentList() {
  const commentState = useCommentState();
  console.log(commentState.comments);
  const current = localStorage.getItem("userData");
  let currentMember;
  if (current) currentMember = JSON.parse(current);
  const User = currentMember.name.toString();
  return (
    <div className="mt-4">
      <div className="flex inline-block">
        <h3 className="text-lg font-medium">Comments</h3>
        <img className="w-4 h-4 mt-2 ml-4" src={commenticon}></img>
      </div>

      <div className="mt-2">
        {commentState.comments.map((comment) => (
          <div
            key={comment.id}
            className="comment rounded border border-gray-300 my-2 px-4 py-2"
          >
            <div className="mr-3">{comment.description}</div>
            <div className="mr-3">
              {" "}
              <strong>At:</strong>
              {comment.createdAt}
            </div>
            <div className="mr-3">
              <strong>By:</strong>
              {comment.User ? comment.User.name : User}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

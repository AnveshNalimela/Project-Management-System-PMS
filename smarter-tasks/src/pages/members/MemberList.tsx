import React, { useEffect } from "react";

// So, let's import the useProjectsDispatch custom hook.

// I'll import the ProjectListItems component from the same folder.
// This I'll define next.
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MemberListItems from "./MemberListItems";
const MemberList: React.FC = () => {
  // I'll define a new constant called dispatchProjects,
  // to call the useProjectsDispatch() hook.
  const dispatchMembers = useMembersDispatch();

  useEffect(() => {
    // And I'll pass the `dispatchProjects` to `fetchProjects` function.
    fetchMembers(dispatchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-2 mt-5">
      {/*To keep this file clean, I'll move all the logic to access the projects
       from our app-state, to a new component ProjectListItems */}
      <MemberListItems />
    </div>
  );
};
export default MemberList;


import { MembersProvider } from "../../context/members/context";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Members = () => {
  return (
    <>
      <MembersProvider>
        <div className="flex justify-between">
          <h2 className="text-3xl font-medium tracking-tight text-blue-600">Members</h2>
          <NewMember />
        </div>
        <MemberList />
      </MembersProvider>
    </>
  );
};
export default Members;

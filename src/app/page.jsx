import { getUsers } from "@/actions/users.actions";
import { Controller } from "@/components/Controller";
import { Pagination } from "@/components/Pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import UserTableRow from "@/components/UserTableRow";

const home = async ({ searchParams }) => {

  let { data, pageEnd } = await getUsers(searchParams);
  return <div className="space-y-4">
    <Controller buttonLink={'/users/create'} buttonText="Add User" title={"All Users"} pageEnd={pageEnd} searchParams={searchParams} />

    <Table>
      <TableCaption>A list of your recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>User Id</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Date of Birth</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => <UserTableRow data={item} key={item._id} />)}
      </TableBody>
    </Table>

  </div>
}

export default home
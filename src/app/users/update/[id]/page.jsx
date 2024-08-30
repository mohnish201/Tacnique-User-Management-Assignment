import { getUserById } from "@/actions/users.actions"
import { Controller } from "@/components/Controller"
import { UserInputForm } from "@/components/UserInputForm"

const update_user = async ({ params: { id } }) => {

    let { data } = await getUserById(id);



    return <div>
        <Controller title={"Update User"} />

        <UserInputForm defaultValue={data} />
    </div>
}

export default update_user
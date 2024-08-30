import { Controller } from "@/components/Controller"
import { UserInputForm } from "@/components/UserInputForm"

const create_user = () => {
    return <div>
        <Controller title={"Add New User"} />

        <UserInputForm />
    </div>

}

export default create_user
import { Spinner } from "react-bootstrap"

function Loading() {
    return(
        <div className="text-center my-5">
            <Spinner animation="grow" />
        </div>
        )
}
export default Loading
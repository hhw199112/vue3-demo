import request from "@/utils/request"

export function getData(){

    return request.get("/todos")

}


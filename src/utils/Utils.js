import { axiosReq } from "../api/axiosDefault"

export const fetchMoreData = async (resource, setResource) => {
    try {
        console.log("running fetchMoreData")
      const { data } = await axiosReq.get(resource.next);
      setResource((prevResource) => ({
        ...prevResource,
        next: data.next,
        results: data.results.reduce((acc, cur) => {
            console.log("data.results.next: ", data.results.next)
          return acc.some((accResult) => accResult.id === cur.id) ? acc : [...acc, cur];
        }, prevResource.results),
      }))
      
    } catch (err) {
        console.log(err)
    }
  };
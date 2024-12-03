const path : string = '/training-dev/ec';
 

function Route(link : string) {
    const ROUTE = {
        Link: `${path}/${link}`
    }
    return ROUTE.Link
}   

export default Route;
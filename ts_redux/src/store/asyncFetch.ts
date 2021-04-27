
interface HttpResponse<T> extends Response {
    parsedBody?: T; 
}

interface ConfigInterface {
    method: string;
    headers: Headers;
}

const config: ConfigInterface = {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' })
}

export const getData = async <T>(url: RequestInfo): Promise<HttpResponse<T>> => {
    const response: HttpResponse<T> = await fetch(url, config);
    return response.json();
};

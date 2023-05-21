export const GET = async (request) => {

    const data = { "item": { "id": 1, "amout": 200, "price": 20000 } };

    return new Response(JSON.stringify(data), { status: 200 })

}


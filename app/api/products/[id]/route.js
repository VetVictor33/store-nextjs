import { promises as fs } from "fs";
import path from "path";

export const GET = async (request, { params }) => {

    const filePath = path.join(process.cwd(), 'lib')

    const data = await fs.readFile(`${filePath}/data.json`);

    const dataJson = JSON.parse(data);

    const response = dataJson.produtos.find(product => product.id === +params.id);

    return new Response(JSON.stringify(response), { status: 200 })

}
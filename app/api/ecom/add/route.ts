import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
// import { parse } from 'path';

export async function POST(request: Request) {
    const data = await request.json();
    console.log("running api/ecom/add/route.ts");

    // console.log(data);

    try {
      const {Pname,Pid,Price,Quantity}=data;
        const pid = parseInt(Pid);
        const pr = parseInt(Price);
        const qt= parseInt(Quantity);
        
        await sql`
      INSERT INTO product (Pname,Pid,Price,Quantity)
      VALUES (${Pname},${pid},${pr},${qt}); `;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const products = await sql`SELECT * FROM product;`;
    return NextResponse.json({ products }, { status: 200 });
}

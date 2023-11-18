import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET(request: Request) {
    noStore();
    try {
        const data = await sql`select * from product`;
        // console.log(data);
        return NextResponse.json({ data:data.rows }, { status: 200 ,headers: { 'Cache-Control': 'no-store' }});
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    // return NextResponse.json({ success: true }, { status: 200 });

}
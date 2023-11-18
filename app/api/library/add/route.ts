import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
// import { parse } from 'path';

export async function POST(request: Request) {
    const data = await request.json();
    console.log("running api/library/add/route.ts");

    // console.log(data);

    try {
        const { Bookid, Title, Author, Isbn, Genre, Publicationyear, Copiesavailable, Totalcopies } = data;
        console.log(Bookid, Title, Author, Isbn, Genre, Publicationyear, Copiesavailable, Totalcopies);

        if (!Bookid || !Title || !Author || !Isbn || !Genre || !Publicationyear || !Copiesavailable || !Totalcopies) {
            throw new Error('All fields are required');
        }
        const bid = parseInt(Bookid);
        const pubyear = parseInt(Publicationyear);
        const copiesavail = parseInt(Copiesavailable);
        const totalcopies = parseInt(Totalcopies);
        await sql`
      INSERT INTO BOOKS (Bookid, Title, Author, Isbn, Genre, Publicationyear, Copiesavailable, Totalcopies)
      VALUES (${bid}, ${Title}, ${Author}, ${Isbn}, ${Genre}, ${pubyear}, ${copiesavail}, ${totalcopies}); `;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const books = await sql`SELECT * FROM BOOKS;`;
    return NextResponse.json({ books }, { status: 200 });
}

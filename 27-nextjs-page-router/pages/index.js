// our-domain.com/

import Link from 'next/link';
import { Fragment } from 'react';

function HomePage() {
    return (
        <Fragment>
            <h1>The Home Page</h1>
            <Link href='/news'>Browse The News</Link>
        </Fragment>
    ); 
}

export default HomePage;
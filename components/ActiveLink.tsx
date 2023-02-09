import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

type Props = {
    text: string,
    href: string
}

export const ActiveLink = ({ text, href }: Props ) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href } style={ asPath === href ? style : undefined }>{ text }</Link>
        );
};




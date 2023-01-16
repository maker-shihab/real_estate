import Link from "next/link";
// import Image from "next/image";

// import {Fabed, Fabath } from 'react-icons/fa';
// import {BsGridFill} from 'react-icons/bs';
// import {GoVerified } from 'react-icons/go';
// import millify from 'millify';

const Property = ({property: {title, externalID}}) => (
    <Link href={`/property/${externalID}`} passHref>
        {title}
    </Link>
)

export default Property;
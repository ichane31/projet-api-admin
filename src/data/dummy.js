import React from 'react';
import { AiTwotoneHome, AiOutlineSetting , AiFillProject } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { BiCategory, BiPlus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';

import { CgProfile } from 'react-icons/cg';
import logo from './logo.png'
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

export const SiteLogo = () => {
    return ( <
        img className = "logo"
        src = { logo }
        alt = "logo" /
        >
    )
}


export const links = [{
        title: 'Dashboard',
        links: [{
            name: 'Home',
            ulr: '',
            icon: < AiTwotoneHome / > ,
        }, ],
    },
    {
        title: 'Users',
        links: [{
            name: 'Gerer users',
            url: 'users',
            icon: < FaUsers / > ,
        }, ],
    },

    {
        title: 'Categorie des Cours',
        links: [{
                name: 'Gerer les Categories',
                url: 'Categories',
                icon: < BiCategory / > ,
            },
            {
                name: 'Nouveux Categories',
                url: 'NewCategorie',
                icon: < BsPlusLg / > ,
            }
        ]
    },
    {
        title: 'Projets',
        links: [{
                name: 'Gerer les Projets',
                url: 'Projets',
                icon: < AiFillProject / > ,
            },
            {
                name: 'Nouveux Projets',
                url: 'NewProjet',
                icon: < BsPlusLg / > ,
            },
        ],
    },



];


export const userProfileData = [{
        icon: < CgProfile / > ,
        title: 'Mon Profile',
        desc: 'Voir le profile',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        to: "profile"
    },
    {
        icon: < AiOutlineSetting / > ,
        title: 'Settings',
        desc: 'Modifier les paramètres',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
        to: "settings"
    },
];

export const chatData = [{
        image: avatar3,
        message: 'An Error is Reported by Ama',
        desc: '',
        time: '03:08 AM',
    },
    {
        image: avatar2,
        message: 'Mari say thank',
        desc: 'Maryam like the new category',
        time: '9:36 AM',
    },
    {
        image: avatar4,
        message: 'An Error is Reported by Laure',
        desc: 'Elon reported an error at the adding a projet to a new category',
        time: '11:39 AM'
    },
    {
        image: avatar4,
        message: 'An Error is Reported by Yen',
        desc: '',
        time: '9:39 PM',
    },

];
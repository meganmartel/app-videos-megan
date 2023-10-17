import { Video } from "./video";

export const VIDEOS: Video[] = [
    {
        nom: 'Vidéo 1',
        description: 'Description de la vidéo 1',
        code: 'ABC001',
        categories: ['Horreur'],
        auteur: {
            nomAuteur: 'Dave Thivierge',
            coordonnees: {
                courriel: 'davethivierge@gmail.com',
                compteFacebook: 'Dave Thivierge',
                compteInstagram: '@dave.thivierge',
            },
            descriptionAuteur: 'Description de Dave Thivierge',
        },
        datePublication: new Date(2020, 10, 31),
        duree: 120,
        nombreVues: 2500,
        avis: [
            {
                note: 8,
                commentaires: 'Commentaires de la vidéo 1',
            },
        ]
    },

    {
        nom: 'Vidéo 2',
        description: 'Description de la vidéo 2',
        code: 'ABC002',
        categories: ['Action'],
        auteur: {
            nomAuteur: 'Pascal Leclerc',
            coordonnees: {
                courriel: 'pascalleclerc@gmail.com',
                compteFacebook: 'Pascal Leclerc',
                compteInstagram: '@pascal.leclerc',
            },
            descriptionAuteur: 'Description de Pascal Leclerc',
        },
        datePublication: new Date(2021, 5, 15),
        duree: 90,
        nombreVues: 3000,
        avis: [
            {
                note: 9,
                commentaires: 'Commentaires de la vidéo 2',
            },
        ]
    },


    {
        nom: 'Vidéo 3',
        description: 'Description de la vidéo 3',
        code: 'ABC003',
        categories: ['Humour'],
        auteur: {
            nomAuteur: 'Michel Lemieux',
            coordonnees: {
                courriel: 'michellemieux@gmail.com',
                compteFacebook: 'Michel Lemieux',
                compteInstagram: '@michel.lemieux',
            },
            descriptionAuteur: 'Description de Michel Lemieux',
        },
        datePublication: new Date(2021, 8, 12),
        duree: 150,
        nombreVues: 3500,
        avis: [
            {
                note: 8.5,
                commentaires: 'Commentaires de la vidéo 3',
            },
        ]
    },
]
// src/types/NewsTypes.ts

export interface NavbarProps {
    setCategory: React.Dispatch<React.SetStateAction<string>>;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export interface NewsItemProps {
    title: string;
    description?: string;
    src: string;
    url: string;
}

export interface NewsBoardProps {
    category: string;
    searchQuery: string;
}

export interface Article {
    title: string;
    description: string;
    urlToImage: string;
    url: string;
}

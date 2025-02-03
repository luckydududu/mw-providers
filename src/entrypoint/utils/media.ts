export type CommonMedia = {
  title: string;
  releaseYear?: number;
};

export type MediaTypes = 'show' | 'movie' | 'custom_video';

export type ShowMedia = CommonMedia & {
  type: 'show';
  imdbId?: string;
  tmdbId: string;
  episode: {
    number: number;
    tmdbId: string;
  };
  season: {
    number: number;
    tmdbId: string;
  };
};

export type MovieMedia = CommonMedia & {
  type: 'movie';
  imdbId?: string;
  tmdbId: string;
};

export type CustomVideoMedia = CommonMedia & {
  type: 'custom_video';
  custom: {
    customType: string;
    customCode: string;
  };
};

export type ScrapeMedia = ShowMedia | MovieMedia | CustomVideoMedia;

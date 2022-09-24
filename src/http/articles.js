import qs from 'qs';
import http from './index';

export const getArticles = async () => {
    const query = qs.stringify({
        fields: ['title', 'slug', 'date', 'description'],
        populate: {
            banner: {
                fields: ['url']
            },
            textWithImage: {
                populate: "*"
            },
            front_article: {
                fields: ['position']
            },
            category: {
                populate: '*'
            },
            top_banner: {
                populate: '*'
            }
        }
    })
    const { data } = await http.get('/api/articles?' + query);
    // console.log(['query', data]);
    return data.data;
}
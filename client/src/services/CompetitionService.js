import Api from '@/services/Api';

export default {
  index() {
    return Api().get('competitions');
  },
  create(credentials) {
    return Api().post('competitions/post', credentials);
  },
};

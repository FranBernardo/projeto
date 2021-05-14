import Api from './Api';

export default {
    /**
     * Método responsável por criar um novo(a) 'Employee'
     * (POST): localhost:3000/api/employees
     */
    async createUsers(users) {
      try {
        const response = await Api().post('/users', users);
        return response.data;
      } catch (error) {
        return console.log(error);
      }
    },
}
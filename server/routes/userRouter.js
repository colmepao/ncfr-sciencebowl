/** @format */

const { response } = require('express');
const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

/*router.route('/isLoggedIn').get(authController.isLoggedIn);
axios
  .get(config.DOMAIN.name + 'user/isLoggedIn')
  .then((response) => setLoginStatus(response.data.isLoggedIn));
*/

// router.patch('/update', userController.updateMany);

router.post('/register', authController.register);

router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.patch(
	'/updateMyPassword',
	authController.protect,
	authController.updatePassword
);

router.get('/', authController.protect, userController.getUser);

/*router
  .route('/:id')
  .get(authController.protect, userController.getUser)
  .patch(authController.protect, userController.updateUser)
  .delete(authController.protect, userController.removeUser);
*/

module.exports = router;

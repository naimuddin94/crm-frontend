export const roles = [
  {
    _id: '243734025876',
    role_name: 'Admin',
    permission: [
      'add_role',
      'update_role',
      'delete_role',
      'add_biodata',
      'update_biodata',
      'delete_biodata',
      'add_package',
      'update_package',
      'delete_package',
      'add_subscription',
      'update_subscription',
      'delete_subscription',
      'add_restaurant',
      'update_restaurant',
      'delete_restaurant',
      'add_office',
      'update_office',
      'delete_office',
    ],
  },
  {
    _id: '243734610897',
    role_name: 'Manager',
    permission: [
      'add_biodata',
      'update_biodata',
      'delete_biodata',
      'add_package',
      'update_package',
      'delete_package',
      'add_subscription',
      'update_subscription',
      'delete_subscription',
      'add_restaurant',
      'update_restaurant',
      'delete_restaurant',
      'add_office',
      'update_office',
      'delete_office',
    ],
  },
  {
    _id: '2348760383489',
    role_name: 'Moderator',
    permission: [
      'add_biodata',
      'update_biodata',
      'add_restaurant',
      'update_restaurant',
      'delete_restaurant',
      'add_office',
      'update_office',
      'delete_office',
    ],
  },
];

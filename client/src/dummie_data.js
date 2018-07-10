
const userData = {
    user_name: 'Yao',
    profile_img: 'image3',
    password: 'yao',
    karma_rating: 5,
    friends: [
      { name: 'xue',
        userId: 'u1'
      },
      { name: 'Jay',
        userId: 'u2'
      }
    ],
    groups: [
      { name: 'dog stuff',
        groupId: 'g3'
      },
      { name: 'dress',
        groupId: 'g2'
      }
    ],
    requests: [
      ],
    myStuff: [
      {
          id: 'i7',
          name: 'bluetooth speaker',
          catagrory: 'tech',
          description: 'Bose portable speaker',
          photos: ['image90', 'images4'],
          owner_name: 'Genela',
          owner_id: 'u2',
          status: {
            available: true,
            barrowed: null
          }
      },
      { 
        name: 'black mid-length dress',
        id: 'i2',
        catagrory: 'dresses',
        description: 'size 2, lace, backless cocktail dress',
        photos: [Array],
        owner_name: 'Genela',
        owner_id: 'u3',
        status: { 
          available : true, 
          barrowed : {}
        }
      },
      { 
        name: 'red short dress',
        id: 'i9',
        catagrory: 'dresses',
        description: 'size 2, ruffle dress',
        photos: ['image93', 'images4112'],
        owner_name: 'Genela',
        owner_id: 'u3',
        status: { 
          available : true, 
          barrowed : {
             user_name : null, 
             user_id : null,
             start_date : null,
             return_date : null,
             purpose : null }
        }
      }
      ],
      barrowedStuff: [
      ]
}

module.exports = userData;
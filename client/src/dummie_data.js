const userData = {
  Xue: {
    id: 'u1',
    profile_img: 'image1',
    karma_rating: 2,
    friends: [
      { name: 'Jay',
        userId: 'u2'
      },
      { name: 'Genela',
        userId: 'u3'
      },
      { name: 'Yao',
        userId: 'u4'
      },
      { name: 'Jeff',
        userId: 'u4'
      }
    ],
    groups: [
      { name: 'camping_gears',
        groupId: 'g1'
      },
      { name: 'dresses',
        groupId: 'g2'
      }
    ],
    request: {
        Unicorn_floaty: {
          id: 'i5',
          name: 'unicore floaty',
          catagrory: 'activites',
          description: 'one person floaty',
          photos: ['image20', 'images220'],
          owner_name: 'Genela',
          owner_id: 'u3',
          status: {
            available: 'T',
            barrowed: {
              user_name: 'Xue',
              user_id: 'u1',
              start_date: '7/15/2018',
              return_date: '7/20/2018',
              purpose: 'floating down Russia river'
            }
          }
        }

      }
    },
    myStuff: [
      {
          id: 'i1',
          name: 'Blue light weight backpacking tent',
          catagrory: 'camping',
          description: '7lbs, REI Co-op 2 person backpacking tent',
          photos: ['image940', 'images494'],
          owner_name: 'Xue',
          owner_id: 'u1',
          status: {
            available: true,
            barrowed: null
          }
      },
      {
          name: 'black_cocktail_dress',
          id: 'i2',
          name: 'black mid-length dress',
          catagrory: 'dresses',
          description: 'size 2, lace, backless cocktail dress',
          photos: ['image290', 'images280'],
          owner_name: 'Xue',
          owner_id: 'u1',
          status: {
            available: false,
            barrowed: {
              user_name: 'Genela',
              user_id: 'u3',
              start_date: '7/5/2018',
              return_date: '7/15/2018',
              purpose: 'friends wedding'
            }
          }
        }
      
      ],
      barrowedStuff: [
        { id: 'i3',
          name: 'green mid-length cocktail dress',
          catagrory: 'dresses',
          description: 'size 2, silk, ruffle cocktail dress',
          photos: ['image262', 'images2809'],
          owner_name: 'Yao',
          owner_id: 'u4',
          status: {
            available: 'F',
            barrowed: {
              user_name: 'Xue',
              user_id: 'u1',
              start_date: '7/4/2018',
              return_date: '7/15/2018',
              purpose: 'friends birthday party'
            }
          }
        },
        { id: 'i4',
          name: 'Away white carry-on suitcase',
          catagrory: 'travel',
          description: 'carry-on size',
          photos: ['image232', 'images29'],
          owner_name: 'Jay',
          owner_id: 'u2',
          status: {
            available: 'F',
            barrowed: {
              user_name: 'Xue',
              user_id: 'u1',
              start_date: '7/1/2018',
              return_date: '7/29/2018',
              purpose: 'weekend trip to LA'
            }
          }
        },
      ]
  
}

export default userData;
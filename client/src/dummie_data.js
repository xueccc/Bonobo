const data = {
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
    belonglings: {
      backpacking_tent : {
          id: 'i1',
          name: 'Blue light weight tent',
          description: '7lbs, REI Co-op 2 person backpacking tent',
          photos: ['image940', 'images494'],
          owner_name: 'Xue',
          owner_id: 'u1',
          status: {
            available: 'T',
            barrowed: null
          }
        },
        black_cocktail_dress : {
          id: 'i2',
          name: 'black mid-length dress',
          description: 'size 2, lace, backless cocktail dress',
          photos: ['image290', 'images280'],
          owner_name: 'Xue',
          owner_id: 'u1',
          status: {
            available: 'F',
            barrowed: {
              user_name: 'Genela',
              user_id: 'u3',
              barrowed_date: '7/5/2018',
              return_date: '7/15/2018',
              purpose: 'friends wedding'
            }
          }
        }
      },
      barrowed: [
        { green_cocktail_dress : {
          id: 'i3',
          name: 'black mid-length dress',
          description: 'size 2, silk, ruffle cocktail dress',
          photos: ['image262', 'images2809'],
          owner_name: 'Yao',
          owner_id: 'u4',
          status: {
            available: 'F',
            barrowed: {
              user_name: 'Xue',
              user_id: 'u1',
              barrowed_date: '7/4/2018',
              return_date: '7/15/2018',
              purpose: 'friends birthday party'
            }
          }
        }
        },
        { suitcase: {
          id: 'i4',
          name: 'Away white carry-on',
          description: null,
          photos: ['image232', 'images29'],
          owner_name: 'Jay',
          owner_id: 'u2',
          status: {
            available: 'F',
            barrowed: {
              user_name: 'Xue',
              user_id: 'u1',
              barrowed_date: '7/1/2018',
              return_date: '7/29/2018',
              purpose: 'weekend trip to LA'
            }
          }
        }
        },
      ]
  }
}
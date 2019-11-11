# پس‌گفتار
با تشکر از همه دوستانی که ما را در ساخت این مستندات یاری کردند.
 
بپاس قدردانی از تلاش‌های دوستان همراه نامشان به ترتیب حروف البفا در زیر آورده شده است.
اگر شما نیز علاقمند به همیاری‌ما در جمع‌آوری مستندات هستید
لطفا به 
[این روش](http://google.com)
 به ما کمک کنید.

- علیرضا **صدرایی راد** - [ایمیل](mailto://sadraiiali@gmail.com)
- آرمین **صدرالدین** - [ایمیل](mailto://armin.saddredin@gmail.com)

| Prop     | Type                                                                 | Default | Description             |
| -------- | -------------------------------------------------------------------- | ------- | ----------------------- |
| type     | <code>'tip' &#x7C; 'success' &#x7C; 'warning' &#x7C; 'danger'</code> | N/A     | Badge type              |
| color    | `string`                                                             | N/A     | Custom background color |
| children | `string`                                                             | N/A     | Badge text              |


```cpp {highlight:[3,'5-7',12]}
#ifndef BHV_BASIC_MOVE_H
#define BHV_BASIC_MOVE_H

#include <rcsc/geom/vector_2d.h>
#include <rcsc/player/soccer_action.h>
#include <rcsc/player/world_model.h>
#include <rcsc/common/logger.h>

using namespace rcsc;

class Bhv_BasicMove
        : public rcsc::SoccerBehavior {
public:
    Bhv_BasicMove() {}

    bool execute(rcsc::PlayerAgent *agent);

    bool isDefensive(const WorldModel &wm);

    double getDashPower(bool isDefensive, const rcsc::PlayerAgent *agent);

    // Block Checker
    void
    blockChecker(const WorldModel &wm);
private:
//    double getDashPower(const rcsc::PlayerAgent *agent);
};

#endif

```

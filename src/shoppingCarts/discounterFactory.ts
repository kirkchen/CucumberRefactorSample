import MemberLevel from './memberLevel';
import VipDiscounter from './vipDiscounter';
import NormalDiscounter from './normalDiscounter';

export default class DiscounterFactory {
    static GetDiscounter(level: string) {        
        switch (MemberLevel[level]) {
            case MemberLevel.VIP:
                return new VipDiscounter();            
            case MemberLevel.Normal:
                return new NormalDiscounter();
        }
    }
}
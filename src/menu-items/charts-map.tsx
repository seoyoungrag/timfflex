// third-party
import { FormattedMessage } from 'react-intl';

import { People, Check, Truck, TruckFast, Settings, Profile } from 'iconsax-react';

// types
import { NavItemType } from 'types/menu';

// 아이콘 정의
const icons = {
  people: People,
  check: Check,
  truck: Truck,
  truckFast: TruckFast,
  account: Profile,
  service: Settings
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support: NavItemType = {
  id: 'support',
  title: <FormattedMessage id="지원 현황" />,
  icon: icons.people,
  type: 'collapse', // 메뉴 그룹을 collapse로 설정
  children: [
    {
      id: 'recruit',
      title: <FormattedMessage id="모집하기" />,
      type: 'item',
      url: '/recruit',
      icon: icons.people
    },
    {
      id: 'support-status',
      title: <FormattedMessage id="지원 현황 조회" />,
      type: 'item',
      url: '/support-status',
      icon: icons.people
    }
  ]
};

// ==============================|| MENU ITEMS - INSPECTION ||============================== //

const inspection: NavItemType = {
  id: 'inspection',
  title: <FormattedMessage id="검수" />,
  icon: icons.check,
  type: 'collapse',
  children: [
    {
      id: 'inspection-process',
      title: <FormattedMessage id="검수 처리" />,
      type: 'item',
      url: '/inspection-process',
      icon: icons.check
    },
    {
      id: 'inspection-history',
      title: <FormattedMessage id="검수 이력" />,
      type: 'item',
      url: '/inspection-history',
      icon: icons.check
    }
  ]
};

// ==============================|| MENU ITEMS - DISPATCH ||============================== //

const dispatch: NavItemType = {
  id: 'dispatch',
  title: <FormattedMessage id="배차" />,
  icon: icons.truck,
  type: 'collapse',
  children: [
    {
      id: 'dispatch-status',
      title: <FormattedMessage id="배차 현황" />,
      type: 'item',
      url: '/dispatch-status',
      icon: icons.truck
    },
    {
      id: 'dispatch-management',
      title: <FormattedMessage id="배차 관리" />,
      type: 'item',
      url: '/dispatch-management',
      icon: icons.truck
    }
  ]
};

// ==============================|| MENU ITEMS - DELIVERY ||============================== //

const delivery: NavItemType = {
  id: 'delivery',
  title: <FormattedMessage id="배송목록" />,
  icon: icons.truckFast,
  type: 'collapse',
  children: [
    {
      id: 'order-transfer',
      title: <FormattedMessage id="타 매니저로 주문 이관 기능" />,
      type: 'item',
      url: '/order-transfer',
      icon: icons.truckFast
    },
    {
      id: 'tms-reorder',
      title: <FormattedMessage id="TMS로 주문 재이관" />,
      type: 'item',
      url: '/tms-reorder',
      icon: icons.truckFast
    },
    {
      id: 'tms-reorder-null',
      title: <FormattedMessage id="(재이관 시, 매니저명 이름 NULL)" />,
      type: 'item',
      url: '/tms-reorder-null',
      icon: icons.truckFast
    }
  ]
};

// ==============================|| MENU ITEMS - ACCOUNT ||============================== //

const account: NavItemType = {
  id: 'account',
  title: <FormattedMessage id="계정관리" />,
  icon: icons.account,
  type: 'collapse',
  children: [
    {
      id: 'member-info',
      title: <FormattedMessage id="회원정보" />,
      type: 'item',
      url: '/member-info',
      icon: icons.account
    },
    {
      id: 'admin-info',
      title: <FormattedMessage id="관리자정보" />,
      type: 'item',
      url: '/admin-info',
      icon: icons.account
    }
  ]
};

// ==============================|| MENU ITEMS - SERVICE ||============================== //

const service: NavItemType = {
  id: 'service',
  title: <FormattedMessage id="서비스관리" />,
  icon: icons.service,
  type: 'collapse',
  children: [
    {
      id: 'price-management',
      title: <FormattedMessage id="단가관리" />,
      type: 'item',
      url: '/price-management',
      icon: icons.service
    },
    {
      id: 'policy-management',
      title: <FormattedMessage id="정책관리" />,
      type: 'item',
      url: '/policy-management',
      icon: icons.service
    },
    {
      id: 'grade-management',
      title: <FormattedMessage id="등급관리" />,
      type: 'item',
      url: '/grade-management',
      icon: icons.service
    },
    {
      id: 'vehicle-management',
      title: <FormattedMessage id="차종관리" />,
      type: 'item',
      url: '/vehicle-management',
      icon: icons.service
    },
    {
      id: 'location-management',
      title: <FormattedMessage id="거점관리" />,
      type: 'item',
      url: '/location-management',
      icon: icons.service
    },
    {
      id: 'region-management',
      title: <FormattedMessage id="지역관리" />,
      type: 'item',
      url: '/region-management',
      icon: icons.service
    }
  ]
};

// ==============================|| MENU ITEMS EXPORT ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [support, inspection, dispatch, delivery, account, service]
};

export default menuItems;

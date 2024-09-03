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
  id: 'group-support',
  title: <FormattedMessage id="지원 현황" />,
  type: 'group',
  children: [
    {
      id: 'support-collapse',
      title: <FormattedMessage id="지원 현황" />,
      icon: icons.people,
      type: 'collapse',
      children: [
        {
          id: 'recruit',
          title: <FormattedMessage id="모집하기" />,
          type: 'item',
          url: '/recruit',
          target: false
        },
        {
          id: 'apply-status',
          title: <FormattedMessage id="지원 현황 조회" />,
          type: 'item',
          url: '/apply-status',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - INSPECTION ||============================== //

const inspection: NavItemType = {
  id: 'group-inspection',
  title: <FormattedMessage id="검수" />,
  type: 'group',
  children: [
    {
      id: 'inspection-collapse',
      title: <FormattedMessage id="검수" />,
      icon: icons.check,
      type: 'collapse',
      children: [
        {
          id: 'inspection-process',
          title: <FormattedMessage id="검수 처리" />,
          type: 'item',
          url: '/inspection-process',
          target: true
        },
        {
          id: 'inspection-history',
          title: <FormattedMessage id="검수 이력" />,
          type: 'item',
          url: '/inspection-history',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - DISPATCH ||============================== //

const dispatch: NavItemType = {
  id: 'group-dispatch',
  title: <FormattedMessage id="배차" />,
  type: 'group',
  children: [
    {
      id: 'dispatch-collapse',
      title: <FormattedMessage id="배차" />,
      icon: icons.truck,
      type: 'collapse',
      children: [
        {
          id: 'dispatch-status',
          title: <FormattedMessage id="배차 현황" />,
          type: 'item',
          url: '/dispatch-status',
          target: true
        },
        {
          id: 'dispatch-management',
          title: <FormattedMessage id="배차 관리" />,
          type: 'item',
          url: '/dispatch-management',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - DELIVERY ||============================== //

const delivery: NavItemType = {
  id: 'group-delivery',
  title: <FormattedMessage id="배송목록" />,
  type: 'group',
  children: [
    {
      id: 'delivery-collapse',
      title: <FormattedMessage id="배송목록" />,
      icon: icons.truckFast,
      type: 'collapse',
      children: [
        {
          id: 'order-transfer',
          title: <FormattedMessage id="타 매니저로 주문 이관 기능" />,
          type: 'item',
          url: '/order-transfer',
          target: true
        },
        {
          id: 'tms-reorder',
          title: <FormattedMessage id="TMS로 주문 재이관" />,
          type: 'item',
          url: '/tms-reorder',
          target: true
        },
        {
          id: 'tms-reorder-null',
          title: <FormattedMessage id="(재이관 시, 매니저명 이름 NULL)" />,
          type: 'item',
          url: '/tms-reorder-null',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - ACCOUNT ||============================== //

const account: NavItemType = {
  id: 'group-account',
  title: <FormattedMessage id="계정관리" />,
  type: 'group',
  children: [
    {
      id: 'account-collapse',
      title: <FormattedMessage id="계정관리" />,
      icon: icons.account,
      type: 'collapse',
      children: [
        {
          id: 'member-info',
          title: <FormattedMessage id="회원정보" />,
          type: 'item',
          url: '/member-info',
          target: true
        },
        {
          id: 'admin-info',
          title: <FormattedMessage id="관리자정보" />,
          type: 'item',
          url: '/admin-info',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS - SERVICE ||============================== //

const service: NavItemType = {
  id: 'group-service',
  title: <FormattedMessage id="서비스관리" />,
  type: 'group',
  children: [
    {
      id: 'service-collapse',
      title: <FormattedMessage id="서비스관리" />,
      icon: icons.service,
      type: 'collapse',
      children: [
        {
          id: 'price-management',
          title: <FormattedMessage id="단가관리" />,
          type: 'item',
          url: '/price-management',
          target: true
        },
        {
          id: 'policy-management',
          title: <FormattedMessage id="정책관리" />,
          type: 'item',
          url: '/policy-management',
          target: true
        },
        {
          id: 'grade-management',
          title: <FormattedMessage id="등급관리" />,
          type: 'item',
          url: '/grade-management',
          target: true
        },
        {
          id: 'vehicle-management',
          title: <FormattedMessage id="차종관리" />,
          type: 'item',
          url: '/vehicle-management',
          target: true
        },
        {
          id: 'location-management',
          title: <FormattedMessage id="거점관리" />,
          type: 'item',
          url: '/location-management',
          target: true
        },
        {
          id: 'region-management',
          title: <FormattedMessage id="지역관리" />,
          type: 'item',
          url: '/region-management',
          target: true
        }
      ]
    }
  ]
};

// ==============================|| MENU ITEMS EXPORT ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [support, inspection, dispatch, delivery, account, service]
};

export default menuItems;

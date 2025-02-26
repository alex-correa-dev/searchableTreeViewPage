import React from 'react'
import classNames from 'classnames'

import { Icons } from '@/components/atoms/Icons/Icons'
import { PropsTreeView } from './types'
import {
  isLocation,
  isAssets,
  isComponent,
  isOperatingStatus,
  isAlertStatus,
  isVibration,
  isEnergy,
  isComponentSelected,
} from '@/utils/componentAnalyser'

import styles from './TreeView.module.scss'

const TreeView: React.FC<PropsTreeView> = ({
  treeViewData,
  setComponent,
  component,
}) => {
  return (
    <ul className={styles['tree-view']}>
      {(treeViewData || []).map((leaf: any) =>
        leaf.name ? (
          <li
            className={classNames(
              styles['tree-view__container'],
              {
                [styles['tree-view__container--not-component']]:
                  !isComponent(leaf),
              },
              {
                [styles['tree-view__container--component']]: isComponent(leaf),
              },
              {
                [styles['tree-view__container--selected']]: isComponentSelected(
                  leaf,
                  component
                ),
              }
            )}
            key={leaf.id}
            onClick={
              isComponent(leaf)
                ? () => {
                    setComponent(leaf)
                  }
                : undefined
            }
          >
            <div className={styles['tree-view__text-block']}>
              {!isComponent(leaf) && <Icons.arrowDownIcon />}
              {isLocation(leaf) && <Icons.locationIcon />}
              {isAssets(leaf) && <Icons.assetsIcon />}
              {isComponent(leaf) && (
                <span
                  className={classNames(styles['tree-view__component-icon'], {
                    [styles['tree-view__component-icon--selected']]:
                      isComponentSelected(leaf, component),
                  })}
                >
                  <Icons.componentIcon />
                </span>
              )}
              <p
                data-id={leaf.id}
                className={classNames(styles['tree-view__text'], {
                  [styles['tree-view__text--selected']]: isComponentSelected(
                    leaf,
                    component
                  ),
                })}
              >
                {leaf.name}
              </p>
              {isComponent(leaf) && isVibration(leaf) && (
                <span
                  className={classNames({
                    [styles['tree-view__status-icon--operating']]:
                      isOperatingStatus(leaf),
                    [styles['tree-view__status-icon--alert']]:
                      isAlertStatus(leaf),
                  })}
                >
                  <Icons.treeViewVibrationIcon />
                </span>
              )}
              {isComponent(leaf) && isEnergy(leaf) && (
                <span
                  className={classNames({
                    [styles['tree-view__status-icon--operating']]:
                      isOperatingStatus(leaf),
                    [styles['tree-view__status-icon--alert']]:
                      isAlertStatus(leaf),
                  })}
                >
                  <Icons.treeViewEnergyIcon />
                </span>
              )}
            </div>
            {leaf.children && (
              <TreeView
                key={leaf.id}
                treeViewData={leaf.children}
                setComponent={setComponent}
                component={component}
              />
            )}
          </li>
        ) : null
      )}
    </ul>
  )
}

export default TreeView
